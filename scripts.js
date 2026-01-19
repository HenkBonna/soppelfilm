function collapse(id)
{
    const a = document.getElementById(id);
    const btn_string = id + "_btn";
    const b = document.getElementById(btn_string)
    // let curr_height = a.style.height;

    // print(curr_height);

    if (a.style.height == "0em"){
        a.style.height = "auto";
        document.getElementById(id).scrollIntoView();
        b.innerHTML = "△";
    } else{
        a.style.height = "0em";
        b.innerHTML = "▽";
    }
}