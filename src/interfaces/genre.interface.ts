interface IObjectKeys {
    [key: string]: string | number|[];
}

export interface IGenrePage<T>{
   genres:T
}

export interface IGenre extends IObjectKeys{
    id:number,
    name:string
}
