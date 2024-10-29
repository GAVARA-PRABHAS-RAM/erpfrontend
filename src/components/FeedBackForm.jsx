import React, { useState } from 'react';

const FeedBackForm = () => {
  const [formdata, setformdata] = useState([]);

  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-md w-1/2 mx-auto'>
      <form
        className='flex flex-col space-y-4'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="fname" className='text-gray-700 font-semibold'>Faculty Name</label>
        <input
          id='fname'
          className='border-2 p-2 rounded-md'
          placeholder='Faculty Name'
          type="text"
        />

        <label htmlFor="cname" className='text-gray-700 font-semibold'>Course Name</label>
        <input
          id='cname'
          className='border-2 p-2 rounded-md'
          placeholder='Course Name'
          type="text"
        />

        <label htmlFor="cskill" className='text-gray-700 font-semibold'>Communication Skills</label>
        <input
          id='cskill'
          className='border-2 p-2 rounded-md'
          placeholder='Communication Skills'
          type="text"
        />

        <input
          className='bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 mt-3 cursor-pointer'
          onClick={() => {
            const fName = document.getElementById('fname').value;
            const cName = document.getElementById('cname').value;
            const cskill = document.getElementById('cskill').value;
            setformdata([...formdata, { fName, cName, cskill }]);
          }}
          type="submit"
          value="Submit Feedback"
        />
      </form>

      <div className="mt-6 space-y-4">
        {formdata.map((data, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <p><span className="font-semibold">Faculty Name:</span> {data.fName}</p>
            <p><span className="font-semibold">Course Name:</span> {data.cName}</p>
            <p><span className="font-semibold">Communication Skills:</span> {data.cskill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackForm;
