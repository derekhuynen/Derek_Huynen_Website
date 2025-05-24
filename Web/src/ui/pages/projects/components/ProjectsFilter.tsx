import React from 'react';
import { TextField, Autocomplete, Chip, Stack, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import type { Project } from 'types/Project';


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
        filteredProjects.forEach(p => (p.technologies || p.tech || []).forEach(t => skillSet.add(t)));
        return Array.from(skillSet).sort();
    }, [filteredProjects]);

    React.useEffect(() => {
        setFilteredProjects(projects); // Always reset filteredProjects when projects prop changes
    }, [projects]);

    React.useEffect(() => {
        const subscription = watch((values) => {
            const filtered = projects.filter(project => {
                // Search by title or description
                const matchesSearch =
                    project.title.toLowerCase().includes((values.search ?? '').toLowerCase()) ||
                    project.description.toLowerCase().includes((values.search ?? '').toLowerCase());
                // Filter by selected skills (all must be present)
                const techs = project.technologies || project.tech || [];
                const matchesSkills =
                    (values.selectedSkills ?? []).length === 0 ||
                    (values.selectedSkills ?? []).filter((skill): skill is string => typeof skill === 'string').every(skill => techs.includes(skill));
                // Filter by type (Work/Personal)
                const matchesType = !values.typeFilter || project.type === values.typeFilter;
                // Filter by start and end date
                const projectStart = project.startDate ? new Date(project.startDate) : null;
                const projectEnd = project.endDate ? new Date(project.endDate) : null;
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
                                value.map((option, index) => (
                                    <Chip label={option} {...getTagProps({ index })} key={option} />
                                ))
                            }
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
