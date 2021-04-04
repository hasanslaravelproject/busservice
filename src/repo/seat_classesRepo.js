import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getSeat_Classes = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllSeat_Classes(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchSeat_Classes(pageNo+1,pageSize,search);
        } catch(err) {
            return {
                data:[],
                total:0
            }
        }
    }
    if (
    res &&
    res.data &&
    res.data.data &&
    res.data.data.data &&
    res.data.data.data.length > 0) {
    return res.data.data;
    } else {
        return {
            data:[],
            total:0
        }
    }
}


const addSeat_Classes = (data) => {
return api.post(`/seat_classes`,data)
}
const updateSeat_Classes = (id,data) => {
return api.put(`/seat_classes/${id}`,data)
}
const getAllSeat_Classes = (page,paginator) => {
return api.get(`/seat_classes/?page=${page}&paginator=${paginator}`)
}
const getOneSeat_Classes = (id) => {
return api.get(`/seat_classes/${id}`)
}
const searchSeat_Classes = (page,paginator,searchKey) => {
return api.get(`/seat_classes/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteSeat_Classes = (id) => {
return api.delete(`/seat_classes/${id}`)
}
export {getSeat_Classes,addSeat_Classes,updateSeat_Classes,getAllSeat_Classes,getOneSeat_Classes,searchSeat_Classes,deleteSeat_Classes}


