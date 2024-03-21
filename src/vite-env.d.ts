/// <reference types="vite/client" />

type Grafic = {
    interval?: number;
    realTime?: boolean;
    historic?: boolean;
    from?: string;
    to?: string;
}
type Stock = {
    country: string;
    currency: string;
    exchange: string;
    mic_code: string;
    name: string;
    symbol: string;
    type: string;
}

type Meta = {
    currency: string;
    exchange: string;
    exchange_timezone: string;
    interval: string;
    mic_code: string;
    symbol: string;
    type: string;
}
type Values = {
    close: string;
    datetime: string;
    high: string;
    low: string;
    open: string;
    volume: string;
}

// requests 
type GetAllRequest = {
    status: string;
    data: Stock[];
    message?: string;
}
type GetOneRequest = {
    status: string;
    data: Stock[];
    message?: string;
}
type GetSeriesRequest = {
    status: string;
    message?: string;
    values: Values[];
    meta: Meta;

}
type Form = { name: string, interval?: number | undefined, from?: string | undefined, to?: string | undefined }