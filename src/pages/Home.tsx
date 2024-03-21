import { useState, useEffect, Suspense } from 'react'
import List from '../Components/List/List.tsx'
import ApiServices from '../api/Api.ts'
import Paper from '@mui/material/Paper';
import Paginator from '../Components/Pagination/Paginator.tsx'
import Search from '../Components/Search/Searc.tsx'
import Spinner from '../Components/Spinner/Spinner.tsx'
import TableContainer from '@mui/material/TableContainer';
import Notification from '../Components/Notification/Notification.tsx'

const Home = () => {
    console.log('renderiza home')
    const [data, setData] = useState<Stock[]|null>(null)
    const [dataToPresent, setDataToPresent] = useState<Stock[]| null>(null)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openNotification, setOpenNotification] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            const data = await ApiServices.get()
                setDataToPresent(data.data?.slice(0, 10))
                setData(data.data)
                setOpenNotification(true)
        }
        fetch()
    }, [])
    const handleChangeDataToPresent = (data: any) => {
        setDataToPresent(data)
     }
    const filterData = (event: any) =>{
        if(event.target.value.length < 2){
            return ;
        }
        const newData = data?.filter((item:any) => item.name.toLowerCase().includes(event.target.value.toLowerCase()) || item.symbol.toLowerCase().includes(event.target.value.toLowerCase()))
        if(newData)
        setDataToPresent(newData.slice(0, rowsPerPage))
    }
    const handleChangeRowsPerPage = (data: any) => {
        setRowsPerPage(data)
    }
    const handleCloseNotification = (data: any) => {
        setOpenNotification(false)
    }
    return (
        <>
            <Suspense fallback={<h1>Cargando...</h1>}>
                {data ? (
                    <>
                    <TableContainer component={Paper}>
                        <Search filterData={filterData} navigation={true} text='bienvenido'/>
                        <List data={dataToPresent? dataToPresent: []} />
                        <Paginator
                        rowsPerPage={rowsPerPage}
                        data={data}
                        handleChangeDataToPrese={handleChangeDataToPresent}
                        changeRowsPerPage={handleChangeRowsPerPage}/>
                    </TableContainer>
                    <Notification
                    handleClose={handleCloseNotification}
                    open={openNotification}
                    text={'Data Descargada'}/>
                    </>
                ) : (
                    <>
                    <Spinner/>
                    <p>No data available yet.</p>
                    </>
                )}
            </Suspense>

        </>
    )
}
export default Home