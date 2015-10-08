var Fhotos = React.createClass({

  getInitialState(){
    var startingState = {fhotos: []}

   return startingState

  },

  fetchFhotos(){
   var component = this;
    return fetch("/api/fhotos")
      .then(function(response){
       return response.json()
      })
},

componentDidMount(){
  var component = this
  this.fetchFhotos().then(function(json_data){
    var fhotoList = json_data.fhotosFound.map(function(fhotoObject){
     return fhotoObject.profile_image_name
    })

    var newState = {fhotos: fhotoList}

    component.setState(newState)

    // //same as...
    // this.setState({
    //   fhotos: fhotoList
    // })


  })
  //  this.fetchFhotoInterval = setInterval(this.fetchFhotos, 3000);
  //  console.log("test")
},

componentWillUnmount(){
  //  clearInterval(this.fetchFhotoInterval);
 },

 handleRefreshClick(){
   this.fetchFhotos();
 },

  render() {

    var photosJSX = this.state.fhotos.map(function(fhoto){
      return <div className="fhoto"> <img src={fhoto}/> </div>
    })

    return (
    <div>

       <div className="text-right">
         <button onclick={this.handleRefreshClick} className="btn btn-primary">Refresh</button>
       </div>

       { photosJSX }
     </div>

   )

  }
});
