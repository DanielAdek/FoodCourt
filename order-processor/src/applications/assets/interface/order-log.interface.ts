export type OrderLogType = {
    id: number;
    log: string;
    time: Date;
}

export interface IOrderLog extends OrderLogType {}