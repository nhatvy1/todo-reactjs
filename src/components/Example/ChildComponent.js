import React from "react";
import './table.scss'
class ChildComponent extends React.Component {
    render() {
        let { arrJobs } =this.props
        return (
            <>
                <div className="job-list">
                    {
                        arrJobs.map((job, index)=> {
                            return (
                                <div>{index + 1} - { job.title } - { job.salary } <span>X</span></div>
                            )
                        })
                    }
                </div>

                <table id="customers">
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Công việc</th>
                        <th>Lương</th>
                        <th></th>
                    </tr>
                    {
                        arrJobs.map((job, index)=> {
                            return (
                                <tr>
                                    <td>{ index+1 }</td>
                                    <td>{ job.title }</td>
                                    <td>{ job.salary }</td>
                                    <td>Xóa</td>
                                </tr>
                            )
                        })
                    }
                    
                </table>
            </>
        )
    }
}

export default ChildComponent