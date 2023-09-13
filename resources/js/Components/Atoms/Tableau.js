import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class Tableau extends Component {
  componentDidMount() {
    
    const { site_name } = this.props;
    console.log(site_name)
    const options = {
      
        hideTabs: true,
        urlParameter: [
          {
            name: 'Nama_Site',
            value: site_name
          }
        ]
      };
    const vizUrl = 'https://prod-apnortheast-a.online.tableau.com/t/banktanahid/views/petabidang_inhouse_v1/Dashboard1/1dfc3aaf-b785-4685-915b-4327d3d4b72c/cd26b894-370e-4eef-a99a-55ab614e987f';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl,options)
  }
 
 
 
 
  render() {
    return (
      <div style={{height:'50vh'}} ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}
 
 
export default Tableau;