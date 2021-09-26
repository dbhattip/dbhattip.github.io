function toggleAnswer(f) {
	var click = f.id.split('ques')[1];
	var ans = "ans"+click;
	var x = document.getElementById(ans);
	var change;
	if(x.style.display=='none'){
		x.style.display='block';
		change = true;
	}else{
		change = false;
	}
	var len = document.getElementsByClassName('certification').length;
	for(var i=1;i<=len;i++){
		if(i==click && change){
			continue;
		}
		document.getElementById("ans"+i).style.display='none';
	}
}

function toggleSkill(f) {
	var click = f.id.split('set')[1];
	var skill = "skill"+click;
	var x = document.getElementById(skill);
	var change;
	if(x.style.display=='none'){
		x.style.display='block';
		change = true;
	}else{
		change = false;
	}
	var len = document.getElementsByClassName('skill').length;
	for(var i=1;i<=len;i++){
		if(i==click && change){
			continue;
		}
		document.getElementById("skill"+i).style.display='none';
	}
}

function loadProject(filename){
	$("#projcontainer").show();
	filename = "project/"+filename + ".html";
	$("#projectholder").load(filename);
	
}

function closeProject(){
	$("#projcontainer").hide();
}
