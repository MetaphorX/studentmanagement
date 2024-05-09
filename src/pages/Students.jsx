import React, {useEffect, useState} from "react";
import { client } from "../utility/client";
import { studentQuery } from "../utility/lib";
import Table from "../components/Table";

const Students = () => {

  const [items, setItems] = useState([])
  
  useEffect(() =>{
    client.fetch(studentQuery)
      .then((data) =>setItems(data))
  },[studentQuery])

  console.log(items)
  return (
    <>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Student List</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Students</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Student List</h3>

              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i class="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div class="card-body p-0">
              <table class="table table-striped projects">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Names</th>
                    <th>Student Passport</th>
                    <th>Academic Progress</th>
                    <th>Email Address</th>
                    <th class="text-center">Matric Number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((item) =>(
                    //   <tr>
                    //   <td>#</td>
                    //   <td>
                    //     <a>Paul James</a>
                    //     <br />
                    //   </td>
                    //   <td>
                    //     <ul class="list-inline">
                    //       <li class="list-inline-item">
                    //         <img
                    //           alt="Avatar"
                    //           class="table-avatar"
                    //           src="../../dist/img/avatar4.png"
                    //         />
                    //       </li>
                    //     </ul>
                    //   </td>
                    //   <td class="project_progress">
                    //     <div class="progress progress-sm">
                    //       <div
                    //         class="progress-bar bg-green"
                    //         role="progressbar"
                    //         aria-valuenow="57"
                    //         aria-valuemin="0"
                    //         aria-valuemax="100"
                    //       ></div>
                    //     </div>
                    //     <small>57% Complete</small>
                    //   </td>
                    //   <td class="project-state">
                    //     <span class="badge badge-success">Success</span>
                    //   </td>
                    //   <td class="project-actions text-right">
                    //     <a class="btn btn-primary btn-sm" href="#">
                    //       <i class="fas fa-folder"></i>
                    //       View
                    //     </a>
                    //     <a class="btn btn-info btn-sm" href="#">
                    //       <i class="fas fa-pencil-alt"></i>
                    //       Edit
                    //     </a>
                    //     <a class="btn btn-danger btn-sm" href="#">
                    //       <i class="fas fa-trash"></i>
                    //       Delete
                    //     </a>
                    //   </td>
                    // </tr>
                    <Table key={item._id} item={item}/>
                  ))}
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Students;
