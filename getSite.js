
function getSiteInfo() {
    let site=[];
    let index = 0 ;
    while (index < 3)
    {
        site.push({
            name:prompt('enter site name'),
            address:prompt('enter site address')
        })
        index++;
    }
    return site;
}

function makeTree(sites) {
    let tree='<ul>\n';
    sites.forEach(value=>{
        tree+=`\t<li><a href='${value.name}'>${value.address}</a></li>\n`
    })
    tree+='</ul>'
    return tree;
}

console.log(makeTree(getSiteInfo()));