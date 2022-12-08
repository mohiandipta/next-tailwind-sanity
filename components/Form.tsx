import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { config } from "../src/config";
import { tForm } from "../src/types/Form";


export default function Form() {
  const [data, setData] = useState([]);

  const getServerSideProps = async () => {
    try {
      const query = groq`*[_type == "form"]`;
      const FormData = await config.fetch(query);
      // console.log(FormData)
      setData(FormData)
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <div className="container py-12 px-6 h-full">
      <div className="flex justify-center mx-5 items-center flex-wrap h-full g-6 text-white">
        <div className="lg:w-6/6">
          <div className="block bg-gray-900 shadow-lg rounded-lg">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="w-full lg:w-[480px] px-2 rounded-md bg-slate-800">
                <div className="md:p-2 md:mx-6">
                  <form>
                    {data.map((data:tForm)=>{
                      return (
                        <>
                          <p className="mb-2">{data.label}</p>
                          <div className="mb-4">
                            <input
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="FormControlInput1"
                              placeholder="Enter Your Name"
                            />
                          </div>
                        </>
                      );
                    })}
                    
                    {/* <p className="mb-2">Phone Number</p>
                    <div className="mb-4">
                      <input
                        type="text-pass"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="FormControlInput2"
                        placeholder="Enter Your Phone Number"
                      />
                    </div> */}
                    {/* <p className="mb-2">E-mail</p>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="FormControlInput3"
                        placeholder="Enter Your Email"
                      />
                    </div> */}

                    <div className="flex justify-start">
                      <div className="form-check">
                        <input
                          className="form-check-input h-5 w-5 cursor-pointer accent-orange-600  transition duration-200 align-top  float-left mr-2 mt-2"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label inline-block text-white"
                          // for="flexCheckDefault"
                        >
                          <small>
                            {" "}
                            * Lorem ipsum dolor sit amet consectetur{" "}
                            <span className="underline underline-offset-1">
                              adipisicing
                            </span>{" "}
                            elit
                          </small>
                        </label>
                      </div>
                    </div>
                    <p className="text-start ml-9 text-sm text-white underline underline-offset-1">
                      Lorem ipsum dolor sit amet.
                    </p>

                    <div className="flex justify-start">
                      <div className="form-check">
                        <input
                          className="form-check-input h-5 w-5 cursor-pointer accent-orange-600  transition duration-200 align-top  float-left mr-1 mt-2"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label inline-block text-white"
                          // for="flexCheckDefault"
                        >
                          <small className="ml-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.{" "}
                          </small>
                        </label>
                      </div>
                    </div>
                    <p className="text-start ml-9 text-sm text-white">
                      Perspiciatis laborum esse qui deserunt quas aperiam
                      quisquam hic repudiandae illum
                    </p>

                    <div className="text-center mx-28 pt-5 mb-1 ">
                      <button
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        style={{
                          background:
                            "linear-gradient( to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p className="text-center text-white text-xs bg-cyan-600 rounded-md">
              &copy;2022 Mohian Dipta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
