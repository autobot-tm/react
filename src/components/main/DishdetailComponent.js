import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({ dishes }) {
    return (
        <Card>
            <CardImg width='100%' src={dishes.image} alt={dishes.name} />
            <CardBody>
                <CardTitle><strong>{dishes.name}</strong></CardTitle>
                <CardText>{dishes.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    return (
        <div align="left">
            <p>{comments.comment}</p>
            <p>{comments.author} {comments.date}</p>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dish != null) {
        const showComments = props.dish.comments.map((item) => {
            return (
                <RenderComments comments={item} />
            );
        });

        const dish = props.dish;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-5'>
                        <RenderDish dishes={dish} />
                    </div>
                    <div className='col-12 col-sm-7'>
                        <h2 align="left">Comment</h2>
                        {showComments}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (<div></div>);
    }

}
export default DishDetail;


// class DishDetail extends React.Component {
//     // eslint-disable-next-line no-useless-constructor
//     constructor(props) {
//         super(props);
//     }

// render() {
// const dish = this.props.dishes;
// if (dish == null) {
//     return (<div></div>);
// }
// const dishItem = this.renderDish(dish);
// const dishComments = this.renderComments(dish.comments);
// return (
//     <div className='row'>
//         {dishItem}
//         {dishComments}
//     </div>
// );

//     if (this.props.dish != null) {
//         const comment = this.props.dish.comments.map((item) => {
//             return (
//                 <div align="left">
//                     <p>{item.comment}</p>
//                     <p>{item.author} {item.date}</p>
//                 </div>
//             )
//         });
//         const dish = this.props.dish;
//         return (
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-12 col-sm-5'>
//                         <Card>
//                             <CardImg width='100%' src={dish.image} alt={dish.name} />
//                             <CardBody>
//                                 <CardTitle><strong>{dish.name}</strong></CardTitle>
//                                 <CardText>{dish.description}</CardText>
//                             </CardBody>
//                         </Card>
//                     </div>
//                     <div className='col-12 col-sm-7'>
//                         <h2 align="left">Comment</h2>
//                         {comment}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//     else {
//         return (<div></div>);
//     }
// }





    // renderDish(dishes) {
    //     if (dishes == null) {
    //         return (<div></div>);
    //     }
    //     return (
    //         <div className='col-12 col-md-5 m-1'>
    //             <Card>
    //                 <CardImg width='100%' src={dishes.image} alt={dishes.name} />
    //                 <CardBody>
    //                     <CardTitle>{dishes.name}</CardTitle>
    //                     <CardText>{dishes.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         </div>
    //     );
    // }

    // renderComments(comments) {
    //     if (comments == null) {
    //         return (<div></div>);
    //     }
    //     const showComments = comments.map((cmt) => {
    //         return (
    //             <div>
    //                 <p>{cmt.comment}</p>
    //                 <p>{cmt.author}
    //                     {cmt.date}
    //                 </p>
    //             </div>
    //         );
    //     });

    //     return (
    //         <div className='col-12 col-md-5 m-1'>
    //             <h4> Comments </h4>
    //             {showComments}
    //         </div>
    //     );
    // }