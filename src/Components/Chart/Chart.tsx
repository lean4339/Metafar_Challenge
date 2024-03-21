import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { selectGrafics } from '../../features/grafic'
import apiService from '../../api/Api'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Notification from '../../Components/Notification/Notification'

const Chart = ({ name }: {name: string}) => {
    const form = useSelector(selectGrafics);
    const [data, setData] = useState({});
    const [openNotification, setOpenNotification] = useState(false);
    const [intervalToReload, setIntervalToReload] = useState(0);
    const [message, setMessage] = useState('');
   
    useEffect(() => {
        let intervalId;

        const downloadData = async () => {
            switch (true) {
                case form.historic:
                    clearInterval(intervalToReload);
                    const response = await apiService.getDataSeries({ ...form, name });
                    if (response.status === 'error') {
                        setOpenNotification(true);
                        if(response.message)
                        setMessage(response.message);
                    }
                    setData({
                        series: [{
                            type: 'line',
                            data: response.values?.map((item: any) => parseFloat(item.close)),
                        }],
                    });
                    break;
                case form.realTime:
                    const response1 = await apiService.getDataSeries({ ...form, name });
                    if (response1.status === 'error') {
                        setOpenNotification(true);
                        if(response1.message)
                        setMessage(response1.message);
                    }
                    setData({
                        series: [{
                            type: 'line',
                            data: response1.values?.map((item: any) => parseFloat(item.close)),
                        }],
                    });
                    if (form.interval) {
                        const time = form.interval * 60 * 1000
                        intervalId = setInterval(() => {
                            alert('here')
                            apiService.getDataSeries({...form, name})
                            .then(response3 =>{
                                if (response3.status === 'error') {
                                    setOpenNotification(true);
                                    if(response3.message)
                                    setMessage(response3.message);
                                }
                                setData({
                                    series: [{
                                        type: 'line',
                                        data: response3.values?.map((item: any) => parseFloat(item.close)),
                                    }],
                                });
                            })
                        }, time);
                        setIntervalToReload(intervalId);
                    }
                    break;
                default:
                    break;
            }
        };

        downloadData();
        return () => {
            if (intervalToReload) {
                clearInterval(intervalToReload);
            }
        };
    }, [form, name]);

    const handleCloseNotification = () => {
        setOpenNotification(false);
    };

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={{ ...data, title: 'oeoe' }}
            />
            <Notification
                open={openNotification}
                handleClose={handleCloseNotification}
                text={message}
            />
        </>
    );
};
export default Chart;