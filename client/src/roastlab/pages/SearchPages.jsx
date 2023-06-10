import { SearchCard } from "../components/SearchCard"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { useForm } from '../../hooks/useForm'

export const SearchPages = () => {
const navigate = useNavigate()
const location = useLocation()
const {q = ''} = queryString.parse(location.search)
//Funcion de busqueda
const heroes = q

//Validaciones
const showSearch = (q.length === 0)
const showError = (q.length > 0) && heroes.length === 0

console.log({q});
const {searchText, onInputChange} = useForm({
  searchText: ''
}) 
const onSearchSubmit = (event) =>{
  event.preventDefault();
  if (searchText.trim().length <= 1) return
  navigate(`?q=${ searchText }`)
}

  return (
    <>
    <h1>Search</h1>
    <hr />
    <div className="row">
      <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input type="text" placeholder="Search a Item" className="form-control" name="searchText" autoComplete="false" value={searchText} onChange={onInputChange}/>
          <button className="btn btn-outline-dark mt-2">Search</button>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr />
        <div className="alert alert-primary animate__animated animate__fadeIn " style={{display: showSearch ? '' : 'none'}}>
          Search a Item
        </div>
        <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
          Hero by <b>{q}</b> doesn't exists!!
        </div>
        {
        //   heroes.map(hero =>(
        //     <SearchCard />
        //   ))
        }
      </div>
    </div>
    </>
  )
}
