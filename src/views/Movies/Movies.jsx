
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoSearch } from "react-icons/go";

function Movies() {

  const [value, setValue] = useState('');

//   useEffect(() => {
//     if (!value) {
//       return;
//     }
//     setLoading(true);

//     api
//       .getData(value, page)
//       .then(data => {
//         if (data.total === 0) {
//           toast.warning(`oops, we didn't find any images on request ${value}`);
//           return;
//         }
//         page === 1
//           ? setPictures(data.hits)
//           : setPictures(prevState => [...prevState, ...data.hits]);
//       })
//       .catch(error => console.log(error))
//       .finally(() => setLoading(false));
//   }, [value, page]);

  console.log(value)

  const handleTextChange = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return toast.warning("Please, enter a request");
    }
    onSubmit(value);
    setValue('');
  };

  const onSubmit = value => {
    setValue(value);
  };

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <GoSearch />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleTextChange}
            value={value}
          />
        </form>
        <ToastContainer theme="colored" autoClose={3000} />
      </header>
    );
  }

export default Movies;