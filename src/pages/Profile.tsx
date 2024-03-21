import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom"
import ApiService from '../api/Api'
import Search from "../Components/Search/Searc";
import FormProfile from "../Components/FormProfile/FormProfile";
import Spinner from "../Components/Spinner/Spinner";
import Notification from "../Components/Notification/Notification";
import Chart from "../Components/Chart/Chart";

const Profile = () => {
    const {id} = useParams<{id: string}>()
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)
    const [openNotification, setOpenNotification] = useState(false)

    useEffect(() =>{
        const fetch = async() => {
            console.log("Fetching data...",id);
            if(id){
                try {
                    const response = await ApiService.getOne(id)
                    console.log(response)
                    if(response.status == 'error') {
                        setError(response.message? response.message: '')
                    }
                    setOpenNotification(true)
                    setData(response.data)
                } catch (error: any) {
                    setError(error.message)
                }
            }
        }
        fetch();
    },[])

    const handleCloseNotification = (data: any) => {
        setOpenNotification(false)
    }
    return (
        <div>
        <Suspense fallback={<h1>Cargando...</h1>}>
        { data ?(
            <>
            <Search navigation={false} text={`${data[0].symbol} - ${data[0].name} - ${data[0].currency}`} />
            <FormProfile/>
            <p className="chart-title">{data[0].symbol}</p>
            <Chart name={data[0].symbol}/>
            <Notification
            handleClose={handleCloseNotification}
            open={openNotification}
            text='Data cargada'/>
            </>
            ) : (
                <>
                <Spinner />
                <p>No data available yet.</p>
                </>
            )
        }
        </Suspense>
        { error && <Notification open={openNotification} handleClose={handleCloseNotification} text={error}/> }
        </div>
    )
}

export default Profile