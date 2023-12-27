import {useMutation} from "@tanstack/react-query/build/modern";
import axios from "axios/index";
import {useEffect} from "react";

const { data, error } = useQuery({
    queryKey: ['fetchPageData'],
    queryFn: async () => {
        try {
            const response = await axios.get('/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager');
            console.log('API Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
});



useEffect(() => {
    console.log('useEffect triggered');
    console.log('data:', data);
    console.log('error:', error);

    if (data) {
        console.log('Setting page data:', data);
        setPageData(data);
    }
    if (error) {
        console.error('Error fetching page data:', error);
    }
}, [data, error]);



