export default function Form() {
  return (
    <div className="container py-32 px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-white">
        <div className="xl:w-12/12">
          <div className="block bg-gray-900 shadow-lg rounded-lg">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-12/12 px-4 md:px-0">
                <div className="md:p-14 md:mx-6">
                  <form>
                    <p className="mb-4">Please login to your account</p>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        style={{
                          background:
                            "linear-gradient( to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                      >
                        Log in
                      </button>
                      <a className="text-gray-300" href="#!">
                        Forgot password?
                      </a>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Dont have an account?</p>
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-blue-500 text-blue-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Register
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
