// eslint-disable-next-line no-unused-vars
import React from 'react'

const Summary = () => {
  return (
    <>
        {/* Summary */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold">Summary</h3>
            <div className="mt-4">
              <h4 className="text-xl font-medium">Md Anas Khan</h4>
              <p className="text-lg mt-2">
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-2 text-black"></i>{" "}
                  01981380806
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-black"></i>{" "}
                  anas.cse.201@gmail.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-black"></i>{" "}
                  Dhaka, Bangladesh
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}

export default Summary