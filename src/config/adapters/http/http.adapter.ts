
export abstract class HttpAdapter {
    abstract get<T>(url: string, options?: Record<string, any>): Promise<T>;
    //abstract get<T>(url: string, options?: any):Promise<T>;
}