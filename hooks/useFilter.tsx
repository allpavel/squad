type Args = {
    id: number;
    attributes: {
        category: string;
        slug: string;
        title: string;
        image: {
            data: {
                attributes: {
                    url: string;
                };
            }[];
        };
    };
};

export const useFilter = (data: Args[], filter = "all") => {
    if (filter === "all") return data;
    return data.filter((item) => item.attributes.category.toLowerCase().includes(filter));
};
