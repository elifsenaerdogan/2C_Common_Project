/*
import React from 'react'
import {useQuery} from "@tanstack/react-query";

function PageManager() {
  const pageDataKey="pageData"
  const {data, isLoading,error} = useQuery<any >({

    queryKey: ['pageData'],
    queryFn: () => {
      return fetch('/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager').then((res) => res.json())
    }
  })

  if(isLoading) return 'Loading..'
  if(error) return 'Hataaa'+error.message
  return (
    <div>
     <p>{data.labelDTOList["helptools.pukcode.erroremptymessage.input.simcard"]}</p>
    </div>
  )
}
export default PageManager;
*/
