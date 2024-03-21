import axios, {AxiosError} from 'axios';
class ApiService {
    private apiKey:string = import.meta.env.VITE_API_KEY
    private apiHost:string = import.meta.env.VITE_API_HOST

    public constructor () {}

    public async get (): Promise<GetAllRequest> {
        try {
            const data = await axios.get<GetAllRequest>(`${this.apiHost}/stocks`,{headers: {'Authorization': `apikey ${this.apiKey}`}});
            return data.data;
        } catch (error: any | AxiosError) {
            return error;
        }
    }

    public async getOne (name: string): Promise<GetAllRequest> {
        try {
            let url: string = this.apiHost + `/stocks?symbol=${name}&source=docs`
            const data = await axios.get<GetAllRequest>(url,{headers: {'Authorization': `apikey ${this.apiKey}`}});
            return data.data;
        } catch (error: any | AxiosError) {
            return error;
        }
    }
    public async getDataSeries (form: Form): Promise<GetSeriesRequest> {
        try {
            let url: string = this.apiHost + `/time_series?symbol=${form.name}&interval=${form.interval}min`
            if(form.from && form.to){
                url += `&start_date=${form.from}&end_date=${form.to}`;
            }
            const data = await axios.get<GetSeriesRequest>(url,{headers: {'Authorization': `apikey ${this.apiKey}`}});
            return data.data;
        } catch (error: any | AxiosError) {
            return error;
        }
    }
}
export default new ApiService()