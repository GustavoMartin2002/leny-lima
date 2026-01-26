export default interface ProductModel {
    id: string;
    active: boolean;
    name: string;
    resume: string;
    photos: string[];
    link: string;
    description: string[];
    timeline: {
        icon?: string;
        title: string;
    }[];
    modules: {
        title: string;
        topics: string[];
    }[];
    methodology: {
        title: string;
        text: string;
    }[];
    bonus?: {
        title: string;
        text: string;
    }[];
    deliverables: {
        text: string;
    }[];
    payment: {
        anchor_price?: string;
        currency: string;
        value_through: string;
        parcel_value: string;
        cash_value: string;
    };
    details: {
        duration: string;
        format: string;
        encounters: string;
        guarantee: string;
    };
}