import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Stack, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import type { Project } from 'types/Project';
import { getIconConfig } from '../../../components/icon_service/iconMap';
import { getIconElement } from '../../../components/icon_service/iconService';

// Helper component for icon+label
const SkillIconLabel: React.FC<{ skill: string; style?: React.CSSProperties }> = ({ skill, style }) => {
    const config = getIconConfig(skill);
    const [icon, setIcon] = useState<React.ReactElement | null>(null);
    useEffect(() => {
        let ignore = false;
        (async () => {
            const iconEl = await getIconElement(config, { size: 'small' });
            if (!ignore) setIcon(iconEl);
        })();
        return () => { ignore = true; };
    }, [config]);
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, ...style }}>
            <span style={{ minWidth: 16, display: 'inline-flex', alignItems: 'center' }}>{icon}</span>
            <span>{config?.displayLabel || skill}</span>
        </span>
    );
};


interface ProjectsFilterProps {
    allProjects: Project[];
    setProjects: (filtered: Project[]) => void;
}

interface FilterFormValues {
    search: string;
    selectedSkills: string[];
    startDateFilter: string;
    endDateFilter: string;
    typeFilter: string;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({ allProjects: projects, setProjects }) => {
    const { control, watch } = useForm<FilterFormValues>({
        defaultValues: {
            search: '',
            selectedSkills: [],
            startDateFilter: '',
            endDateFilter: '',
            typeFilter: '',
        },
    });

    // Compute available skills based on currently filtered projects
    const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(projects);
    const availableSkills = React.useMemo(() => {
        const skillSet = new Set<string>();
        filteredProjects.forEach(p => (p.tech || []).forEach(t => skillSet.add(t)));
        return Array.from(skillSet).sort();
    }, [filteredProjects]);

    React.useEffect(() => {
        setFilteredProjects(projects); // Always reset filteredProjects when projects prop changes
    }, [projects]);

    React.useEffect(() => {
        const subscription = watch((values) => {
            const filtered = projects.filter(project => {
                // Search by title or description (use short_description/full_description)
                const matchesSearch =
                    project.title?.toLowerCase().includes((values.search ?? '').toLowerCase()) ||
                    project.short_description?.toLowerCase().includes((values.search ?? '').toLowerCase()) ||
                    project.full_description?.toLowerCase().includes((values.search ?? '').toLowerCase());
                // Filter by selected skills (all must be present)
                const techs = project.tech || [];
                const matchesSkills =
                    (values.selectedSkills ?? []).length === 0 ||
                    (values.selectedSkills ?? []).filter((skill): skill is string => typeof skill === 'string').every(skill => techs.includes(skill));
                // Filter by type (Work/Personal)
                const matchesType = !values.typeFilter || project.type === values.typeFilter;
                // Filter by start and end date
                const projectStart = project.startDate ? new Date(project.startDate) : null;
                // If endDate is null, treat as ongoing (use a far-future date for comparison)
                const projectEnd = project.endDate === null ? new Date('2999-12-31') : (project.endDate ? new Date(project.endDate) : null);
                const filterStart = values.startDateFilter ? new Date(values.startDateFilter) : null;
                const filterEnd = values.endDateFilter ? new Date(values.endDateFilter) : null;
                let matchesDate = true;
                if (filterStart && projectEnd) {
                    matchesDate = matchesDate && projectEnd >= filterStart;
                }
                if (filterEnd && projectStart) {
                    matchesDate = matchesDate && projectStart <= filterEnd;
                }
                return matchesSearch && matchesSkills && matchesType && matchesDate;
            });
            setFilteredProjects(filtered);
            setProjects(filtered);
        });
        return () => subscription.unsubscribe();
    }, [watch, projects, setProjects]); return (
        <Box sx={{ mb: 4 }}>
            {/* First row: Search and Type Filter */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }} sx={{ mb: 2 }}>
                <Controller
                    name="search"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            // size='small'
                            label="Search Projects"
                            variant="outlined"
                            {...field}
                            sx={{ minWidth: 220, flex: 1 }}
                        />
                    )}
                />
                <Controller
                    name="typeFilter"
                    control={control}
                    render={({ field }) => (
                        <ToggleButtonGroup
                            value={field.value}
                            exclusive
                            onChange={(_e, v) => field.onChange(v || '')}
                            sx={{ minWidth: 180 }}
                        >
                            <ToggleButton value="">All</ToggleButton>
                            <ToggleButton value="Work">Work</ToggleButton>
                            <ToggleButton value="Personal">Personal</ToggleButton>
                        </ToggleButtonGroup>
                    )}
                />
            </Stack>

            {/* Second row: Skills and Date Filters */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
                <Controller
                    name="selectedSkills"
                    control={control}
                    render={({ field }) => (
                        <Autocomplete
                            multiple
                            options={availableSkills}
                            value={field.value}
                            onChange={(_e, value) => field.onChange(value)}
                            renderTags={(value: string[], getTagProps) =>
                                value.map((option, index) => {
                                    const restTagProps = getTagProps({ index });
                                    return (
                                        <span
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                background: 'var(--mui-palette-grey-900, #222)', // fallback for dark
                                                color: '#fff',
                                                border: '1px solid #444',
                                                borderRadius: 16,
                                                padding: '2px 8px',
                                                margin: '2px',
                                                fontSize: 13,
                                                fontWeight: 500,
                                            }}
                                            {...restTagProps}
                                        >
                                            <SkillIconLabel skill={option} />
                                        </span>
                                    );
                                })
                            }
                            renderOption={(props, option) => (
                                <li {...props} key={option} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 8 }}>
                                    <SkillIconLabel skill={option} />
                                </li>
                            )}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    size='small'
                                    label="Filter by Skills"
                                    variant="outlined" />
                            )}
                            sx={{ minWidth: 220, flex: 1 }}
                        />
                    )}
                />
                <Controller
                    name="startDateFilter"
                    control={control}
                    render={({ field }) => {
                        // Get the current end date value from the form
                        const endDate = control._formValues?.endDateFilter || '';
                        return (
                            <TextField
                                label="Start Date"
                                type="date"
                                size='small'
                                {...field}
                                InputLabelProps={{ shrink: true }}
                                sx={{ minWidth: 160, flex: 1 }}
                                inputProps={{
                                    min: projects.reduce((min, p) => p.startDate && p.startDate < min ? p.startDate : min, projects[0]?.startDate || ''),
                                    max: endDate || projects.reduce((max, p) => p.endDate && p.endDate > max ? p.endDate : max, projects[0]?.endDate || ''),
                                    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
                                        const input = e.target as HTMLInputElement & { showPicker?: () => void };
                                        if (typeof input.showPicker === 'function') {
                                            input.showPicker();
                                        }
                                    }
                                }}
                            />
                        );
                    }}
                />
                <Controller
                    name="endDateFilter"
                    control={control}
                    render={({ field }) => {
                        // Get the current start date value from the form
                        const startDate = control._formValues?.startDateFilter || '';
                        return (
                            <TextField
                                label="End Date"
                                type="date"
                                size='small'
                                {...field}
                                InputLabelProps={{ shrink: true }}
                                sx={{ minWidth: 160, flex: 1 }}
                                inputProps={{
                                    min: startDate || projects.reduce((min, p) => p.startDate && p.startDate < min ? p.startDate : min, projects[0]?.startDate || ''),
                                    max: projects.reduce((max, p) => p.endDate && p.endDate > max ? p.endDate : max, projects[0]?.endDate || ''),
                                    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
                                        const input = e.target as HTMLInputElement & { showPicker?: () => void };
                                        if (typeof input.showPicker === 'function') {
                                            input.showPicker();
                                        }
                                    }
                                }}
                            />
                        );
                    }}
                />
            </Stack>
        </Box>
    );
};

export default ProjectsFilter;
