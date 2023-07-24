export function filterData(searchInput, restaurants){
    const data = restaurants.filter((rest)=> rest.info.name.toLowerCase().includes(searchInput.toLowerCase()));
    return data;
}