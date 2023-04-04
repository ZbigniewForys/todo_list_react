import "./style.css";


const Section=({title,body,buttons})=>(
     <section className="section"> 
<div className="section__header--withButtons">
<h3 className="section__header">{title}</h3>
{buttons}
</div>
{body}

</section>

);


export default Section;
