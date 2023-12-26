import { useGetAstrologersQuery } from "../features/listApiSlice";
import { LoadingComponent } from '../components/LoadingComponent';
import { DataGrid } from '@mui/x-data-grid';


export const AdminPage = () => {
    const { data, isLoading, error } = useGetAstrologersQuery();

    if (isLoading) {
        return <LoadingComponent />
    }
    if (error) {
        return <h1 style={{ textAlign: 'center', marginTop: "5rem" }}>Error while fetching, try Again</h1>
    }
    if (error || data.list.length < 1) {
        return <h1 style={{ textAlign: 'center', marginTop: "5rem" }}>No data Found</h1>
    }

    const rowsData = data.list.map((ele, i) => {
        return {
            id: i + 1,
            col1: i + 1,
            col2: ele.name,
            col3: ele.role,
            col4: ele.languages.join(', '),
            col5: ele.specialties.join(', '),
            col6: ele.status,
            col7: ele.email,
        }
    })

    const columns = [
        { field: 'col1', headerName: 'S.No', width: 50, resizable: false },
        { field: 'col2', headerName: 'Name', width: 140 },
        { field: 'col3', headerName: 'role', width: 100 },
        { field: 'col4', headerName: 'Languages', width: 150 },
        { field: 'col5', headerName: 'Specialties', width: 150 },
        { field: 'col6', headerName: 'status', width: 100 },
        { field: 'col7', headerName: 'contact', width: 250 },
    ];

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid rows={rowsData} columns={columns} getRowHeight={() => 'auto'} />
        </div>
    )
}
