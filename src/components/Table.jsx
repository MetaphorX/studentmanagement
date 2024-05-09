import React from "react";
import {useNavigate} from 'react-router-dom'

const Table = ({item}) => {
    const navigate = useNavigate()
  return (
    <>
      <tr>
        <td>#</td>
        <td>
          <a>{item.name}</a>
          <br />
        </td>
        <td>
          <ul class="list-inline">
            <li class="list-inline-item">
              <img
                alt="Avatar"
                class="table-avatar"
                src="../../dist/img/avatar4.png"
              />
            </li>
          </ul>
        </td>
        <td class="project_progress">
          <div class="progress progress-sm">
            <div
              class="progress-bar bg-green"
              role="progressbar"
              aria-valuenow="57"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <small>57% Complete</small>
        </td>
        <td class="project-state">
          <span class="">{item.email}</span>
        </td>
        <td class="project-state">
          <span class="badge badge-success">{item.idNum}</span>
        </td>
        <td class="project-actions text-right">
          <button class="btn btn-primary btn-sm" 
            onClick={() =>navigate(`/single-student/${item._id}`)}
          >
            <i class="fas fa-folder"></i>
            View
          </button>
          
          <a class="btn btn-danger btn-sm" href="#">
            <i class="fas fa-trash"></i>
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default Table;
