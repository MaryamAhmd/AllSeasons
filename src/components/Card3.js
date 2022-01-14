import { Link } from 'react-router-dom';
const Card3 = (props) =>{
    return(
        <div>
                <div class="card mt-5 ms-5" style={{width: 260}}>
                <img src={props.pic} style={{width:250}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-center">{props.name}</h5>
                    <p class="card-text text-center text-danger fs-5 fw-bold">{props.price}</p>
                    <div class="text-center">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = {`/Card4/${props.name}/${props.price}`}><a href="#" id="button" class="btn text-white text-center">{props.buttonText}</a></Link>
                    </div>
                </div>
                </div>
         </div>

    );
}

export default Card3;