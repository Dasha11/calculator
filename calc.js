document.addEventListener("DOMContentLoaded",
function(){
new Vue({
	el:"#calc",
	data:function(){
		return{id_1:" ",
		id_2:" ",
		id_3:" "
		}
		
	},
	methods:{
			onClick:function calc(){
 
				switch(document.all.idd.selectedIndex)
				{
				case 0:
				  {
				   document.all.id_3.value = parseFloat(document.all.id_1.value) +  parseFloat(document.all.id_2.value)
				  }
				  break;
				case 1:
				  {
				   document.all.id_3.value = parseFloat(document.all.id_1.value) -  parseFloat(document.all.id_2.value)
				  }
				  break;
				case 2:
				  {
				   document.all.id_3.value = parseFloat(document.all.id_1.value) /  parseFloat(document.all.id_2.value)
				  }
				  break;
				case 3:
				  {
				   document.all.id_3.value = parseFloat(document.all.id_1.value) *  parseFloat(document.all.id_2.value)
				  }
				  break;
				}
				 
			}
		}
  })
});

