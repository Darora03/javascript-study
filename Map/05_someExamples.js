  const books =[

{ title:'Book One', genre : 'Fiction',publish: 1981,
    edition:2004},
{ title:'Book Two', genre : 'non fiction',publish: 1992,
    edition:2008},
{ title:'Book Three', genre : 'History',publish: 1999,
    edition:2007},
{ title:'Book Four', genre : 'science',publish: 2002,
    edition:2014},
{ title:'Book Five', genre : 'Fiction',publish: 2006,
    edition:2022},
{ title:'Book six', genre : 'History',publish: 1970,
    edition:2019},
    { title:'Book seven', genre : 'science',publish: 1999,
        edition:2008}

  ];
  let userBooks =books.filter((bk) =>  bk.genre === "History");
  userBooks =books.filter((bk) =>{
    return bk.publish>=1960 && bk.genre ==="History";
  })
  console.log(userBooks)