export default{
  getUpcomingData:() =>{
    const eventData =[
      {key:'0',date:'7-5-2019', name:'Jacksonville Sharks @ Orlando Predators', time:'7:00pm',location:'Amway Center'},
      {key:'1',date:'7-11-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe'},
      {key:'2',date:'7-13-2019', name:'Orlando Predators @ Carolina Cobras', time:'7:00pm',location:'Greensboro Coliseum'},
      {key:'3',date:'7-15-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe'},
      {key:'4',date:'7-19-2019',name:'Columbus Lions @ Orlando Predators', time:'7:00pm', location:'Amway Center'},
      {key:'5',date:'7-25-2019',name:'Bike Night', time:'8:00pm', location:'Ace Cafe'},
      {key:'6',date:'7-27-2019',name:'Orlando Predators @ Jacksonville Sharks', time:'7:00pm', location:'Jacksonville Veterans Memorial Arena'},
    ];
    const events = eventData.map(function(x){
      return{
        key:x.key,
        data:x.date,
        location:x.location,
        name:x.name,
        time:x.time
      }
    });
    return events;
  }
}
