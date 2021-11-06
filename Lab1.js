//Task #1
function filter_list(list)
{
    let new_list = [];
    for (let i of list)
    {
	    if (typeof(list[i]) == 'number')
        {
    	    new_list.push(list[i]);
 		}
	}
    return new_list;
}

//Task #2
function first_non_repeating_letter(s){

    for (i=0; i < s.length; i++) 
    {
        if (s.toLowerCase().indexOf(s[i].toLowerCase()) == s.toLowerCase().lastIndexOf(s[i].toLowerCase())) 
        {
            return s[i]
        }
    }
    return '';
}

console.log("\ntask2: ", first_non_repeating_letter("sTreSS"))

//Task #3
function digital_root(num)
{
    if(num < 10) return num;
    let sum = num;
    while ( sum >= 10) {
     sum = 0;  
     while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
     }
     num = sum;
    }
    return sum;
}

//Task #4
function counter_of_pairs(arr, target)
{
    let n = 0;
    for(let i = 0; i < arr.length-1; i++)
    {
        for(let j = i+1; j < arr.length; j++)
        {
            if (arr[i] + arr[j] == target) n++;
        }
    }
    return n
}

//Task #5
let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphel:Corwill;Alfred:Corwill";
function meeting(s)
{
    full_name = s.split(';');
    dict_of_s = {}
    items = []
    for(let i = 0; i<full_name.length; i++) 
    {
        items.push([full_name[i].split(':')[0], full_name[i].split(':')[1]])
    }
    items.sort(function(a, b)
    {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        else
        {
            if(a[0] < b[0]) return -1;
            if(a[0] > b[0]) return 1;
            return 0;
        }
    }
    );
    var output = '';
    for(let i = 0; i < items.length; i++)
    {
        output = output + "(" +items[i][1] + ", " + items[i][0] + ")"; 
    }
    return output;
}

console.log("\ntask5: ", meeting(s));

//Extra task #1
function nextBigger(n)
{
    var d = n.toString().split('');
    var p = -1;

    for (var i = d.length-1; i > 0; i--) 
    {
      if (+d[i] > +d[i-1])
       {
        p = i-1;
        break;
      }
    }
  
    if (p == -1) return p;
  
    var right = d.splice(p);
    var pv = right.splice(0, 1)[0];
    var mm = null, mmi = null;

    for (var i = 0; i < right.length; i++)
     {
      if (right[i] > pv) 
      {
        if (mm == null || right[i] < mm)
         {
          mm = right[i];
          mmi = i;
        }
      }
    }

    if (mmi == null) return -1;
  
    right.splice(mmi, 1);
    right.push(pv);
    right = right.sort();
  
    var ret = +d.concat([mm]).concat(right).join('');
    if (ret < n) return -1;
    return ret;
}

console.log("\nextra task1: ", nextBigger(2017))

//Extra task #2
function IPv4 (UnsignedInt)
{
    return ( (UnsignedInt>>>24) + '.' + (UnsignedInt>>16 & 255) + '.' + (UnsignedInt>>8 & 255) + '.' + (UnsignedInt & 255) );
}

console.log("\nextra task2: ", IPv4(2149583361), '\n')