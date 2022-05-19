function btnclikd()
{
    console.log("Button is clikd");
}

function keypress(e)
{
    if (e.code === "Enter")
    console.log(e.target.value);
}

function eventhandler(e)
{
    console.log("What is this event ?", e.type);
}