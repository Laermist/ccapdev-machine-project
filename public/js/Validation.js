var accounts = [];
var newAccount;

function Account(id, user, email, pass) {
	this.id = id;
	this.user = user;
	this.email = email;
	this.pass = pass;
}

var user1 = new Account(0, "Madale Mods", "madale@gmail.com", "MadaleMoBa2020");
var user2 = new Account(1, "Marvs202", "marvinsilvala@gmail.com", "M#nch202");
var user3 = new Account(2, "Laermist", "lea_aromin@gmail.com", "SP.master21");
var user4 = new Account(3, "Daboding", "johnDavid@gmail.com", "876jDavid!!");
var user5 = new Account(4, "FakeGuest", "rbx_guest@gmail.com", "aMoGuS69");
accounts.push(user1);
accounts.push(user2);
accounts.push(user3);
accounts.push(user4);
accounts.push(user5);

function validateReg(){
	console.log("Validating registration.");
	var uname = $("#uname");
	var email = $("#email");
	var pwrd1 = $("#pwrd1");
	var pwrd2 = $("#pwrd2");
	
	if(!uname.val() || !email.val() || !pwrd1.val() || !pwrd2.val()){
		if(!uname.val()) $("#uname").css("border-color","red"); 
		if(!email.val()) $("#email").css("border-color","red"); 
		if(!pwrd1.val()) $("#pwrd1").css("border-color","red"); 
		if(!pwrd2.val()) $("#pwrd2").css("border-color","red"); 
		
		alert("Missing information!");
		return false;
	}
	else{
		if(pwrd1.val() !== pwrd2.val()){
			$("#pwrd1").css("border-color","red"); 
			$("#pwrd2").css("border-color","red");
			
			alert("Passwords do not match!");
			return false;
		}
		else{
			newAccount = new Account(accounts.length,uname.val(),email.val(),pwrd1.val());
			accounts.push(newAccount);
			
			alert("Registration complete!");
			return true;
		}
	}
}

function validateLog(){
	console.log("Validating Login.");
	var email = $("#email");
	var pword = $("#pword");
	var pass = false;
	var id;
	
	if(!email.val() || !pword.val()){
		if(!email.val()) $("#email").css("border-color","red"); 
		if(!pword.val()) $("#pword").css("border-color","red"); 
		
		alert("Missing information!");
		return false;
	}
	else{
		for(var i = 0; i < accounts.length; i++){
			if(accounts[i].email === email.val() && accounts[i].pass === pword.val()){
				pass = true;
				id = i;
			}
		}
		if(pass){
			alert("Login successful! Welcome, " + accounts[id].user + "!");
			return true;
		}
		else{
			alert("Incorrect email or password!");
			return false;
		}
	}
}

function showComments(btnID){
	var btnComment = $(btnID);
	var codes;
	$("#comments").empty();
	switch(btnID){
		case "comment1":
			console.log("1");
			codes = "<div class='commentBox'><div class='header'><table><tr><td><h1 class='userhead'>Daboding</h1></td></tr></table><p>Hi, I'm selling Ecto farms but 4 for 150WL. Do you want to buy it?</p></div><center><textarea></textarea></br><button >Post reply</button></center></div><div class='commentBox'><div class='header'><table><tr><td><h1 class='userhead'>FakeGuest</h1></td></tr></table><p>Do you know any other ghost worlds?</p></div><center><textarea></textarea></br><button >Post reply</button></center></div><center> <textarea></textarea></br> <button >Post own comment</button></center>";
			$("#comments").append(codes);
			break;
		case "comment2":
			console.log("2");
			codes = "<div class='commentBox'><div class='header'><table><tr><td><h1 class='userhead'>Laermist</h1></td></tr></table><p>Is World 3 still available? I'm selling Rainbowfish 5lbs/wl.</p></div><center><textarea></textarea></br><button >Post reply</button></center></div><center> <textarea></textarea></br> <button >Post own comment</button></center>";
			$("#comments").append(codes);
			break;
		case "comment3":
			console.log("3");
			codes = "<div class='commentBox'><div class='header'><table><tr><td><h1 class='userhead'>Marvs202</h1></td></tr></table><p>Do you do reserves?</p><hr><table><tr><td><h1 class='userhead'>Laermist</h1></td></tr></table><p>Why yes of course!</p><hr><table><tr><td><h1 class='userhead'>Marvs202</h1></td></tr></table><p>I'll order 50 Berry Crepes. How much?</p></div><center><textarea></textarea></br><button >Post reply</button></center></div><center> <textarea></textarea></br> <button >Post own comment</button></center>";
			$("#comments").append(codes);
			break;
		case "comment4":
			console.log("4");
			codes = "<div class='commentBox'><div class='header'><table><tr><td><h1 class='userhead'>Madale Mods</h1></td></tr></table><p>Yeah, I just started playing growtopia and instantly the servers were down for like 5 days at least</p></div><center> <textarea></textarea></br> <button >Post own comment</button></center>";
			$("#comments").append(codes);
			break;
		case "comment5":
			console.log("5");
			codes = "<center> <textarea></textarea></br> <button >Post own comment</button></center>";
			$("#comments").append(codes);
			break;
	}
}