new G.Res({
name:'barley',
desc:'[barley] is a cereal grain that people can use in alcoholic beverages.',
icon:[0,0,'spicySheet'],
turnToByContext:{'eat':{'health':0.01,'happiness':0.01},'decay':{'spoiled food':0.5		
partOf:'food',
Category:'food',
});
new G.Res({
name:'beer',
desc:'Made from [herb]s and [barley], [beer], its the cure to all your problems.',
icon:[1,0,'spicySheet'],
turnToByContext:{'eat':{'health':0.01,'happiness':0.5},'decay':{'beer':0.95,'spoiled food':0.05}}, 
partOf:'food',
category:'food',
});
G.getDict('grass').res['gather']['barley']=3;	
G.getDict('artisan').modes['beer']={name:'Make Beer',desc:'Turn 3 [barley] and 3 [herb]s into 2 [beer].',req:{'beer preparing':true},use:{'knapped tools':1}};
G.getDict('artisan').effects.push({type:'convert',from:{'barley':3,'herb':3},into:{'beer':2},every:3,mode:'beer'});
new G.Tech({
name:'beer making',
desc:'@[artisan]s can now produce [beer] from [barley] and [herb]s
icon:[0,1,'spicySheet'],
cost:{'insight':10},
req:{'cooking':true},
});
new G.Trait({
name:'devoted alcoholics',
desc:'@your people appreciate [beer] twice as much and will be twice as happy from consuming it.',
icon:[1,1,'spicySheet'],
chance:20,
req:{'beer making':true},
effects:[{type:'function',func:function(){G.getDict('beer').turnToByContext['eat']['happiness']=1;}},], 		
});
	
