
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

function ulliGenerator() {
    let sites = getSiteInfo();
    let output = '<ul>\n';
    let links = sites.map(value => {
        return `\t<li><a href="${value.name}">${value.address}</a></li>`
    })
    let linksOutput = links.join('\n');
    output+=linksOutput;
    output+='\n</ul>'
    console.log(output);
}
ulliGenerator()