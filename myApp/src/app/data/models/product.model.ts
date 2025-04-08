export interface Product {
    id: string
    name: string
    video: string
    link: string
    text1: string
    module: {
        photo: string
        topic1: string
        topic2: string
        topic3: string
    }[];
    bonus: {
        photo: string
        title: string
        text: string
    }[];
    text2: string
    cubes: {
        text: string
    }[]
    payment: {
        value_through: string
        parcel_value: string
        cash_value: string
        encounters: string
    }
}