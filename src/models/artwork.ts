interface Artwork {
    title: string;
    year: string;
    image: string;
    id?: string;
    media?: string;
    buyerID?: number;
    arrangement?: number;
    isHomePage?: boolean;
    price?: string;
    grouping?: string[];
    saleDate?: Date;
    taxStatus?: string;
    salePrice?: number;
    saleRevenue?: number;
};

export default Artwork;