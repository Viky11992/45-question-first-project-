// question no 40:
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in
//  an artist name and an album title, and it should return a Object containing these two pieces of information. Use the 
//  function to make three dictionaries representing different albums. Print each return value to show that Objects are 
//  storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number 
//  of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s
//   Object. Make at least one new function call that includes the number of tracks on an album.

// answer:
function make_album(artist:string,title:string,track?:number) {
    var album:{
        artist:string,title:string,track?:number

    }={
        artist,title,
    }
    if(track!==undefined){
        album.track=track;
    }
    return album;
}
var album1 = make_album("malkoo","nak da kooka");
var album2 = make_album("bohemia","kalli denali",7);
var album3 = make_album("pittbull","on the floor");
console.log(album1);
console.log(album2);
console.log(album3);
