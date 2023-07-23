
function List(){
    return(
<>
<div className="row m-0 ps-0">
        <div class="col-md-7 p-5">
          <h2>Member List</h2>
        </div>
        <div className="col-md-4">
          <a href="./Add" className="btn btn-primary text-centre m-5">
           <h6>Add Member</h6> 
          </a>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Province</th>
            <th>District</th>
            <th>Local Body</th>
            <th>Ward No</th>
            <th>Tole</th>
            <th>Phone no</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </>
  );
}

export default List;