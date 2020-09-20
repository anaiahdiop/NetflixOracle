import React
    from "react";


export default
    class PartyList
    extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            UserList: [],

            myList: [],

        };

    }

    handleClick = (ev, id) => {

        let movies = [];

        this.setState({
            UserList: this.state.UserList.map((user) => {

                if (id ===user.id) {

                    user.checked = ev.target.checked;

                }


                this.props.myList.map((movie) => {


                    if (ev.target.checked) {



                        this.state.UserList.forEach((user)=> {



                            console.log(user);

                            //checks whether the id are the same

                            if (id ===user.id) {

                                // assign the event value

                                if (user.movies.includes(movie)) {

                                    // console.log(movie)

                                    if (!movies.includes(movie)) {

                                        movies.push(movie);
                                    }

                                }

                            }

                            if (user.checked) {

                                // 

                                if (user.movies.includes(movie)) {

                                    console.log(movie)



                                    if (!movies.includes(movie)) {

                                        movies.push(movie);
                                    }

                                }

                            }

                        });

                    }

                });

                return user;
            }

            )
        }


        )

        console.log(movies)

        this.setState({
            myList:
                movies
        });

    };



    componentDidMount() {

        this.setState({
            UserList:
                this.props.UserList
        });

        this.setState({
            myList:
                this.props.myList
        });

    }



    render() {

        let UserFriends =
            this.state.UserList.map((user,index) => (

                    <UserView
                        key={index}
                        data={user}
                        handleClick={this.handleClick}
                    />

                ));



        let MyMovies =
            this.state.myList.map((movie,index) => (

                    <MovieView
                        key={index}
                        movie={movie}
                    />

                ));

        return (

            <>
                <h2>Add to your Party</h2>
                <div
                    className="User-friends">{UserFriends}</div>

                <h2>Shared Party Watchlist:</h2>

                <div
                    className="movie-list">{MyMovies}</div>

            </>

        );

    }

}




function
    UserView(props) {

    // console.log(props)

    return (

        <div className="user-view">

            <input

                type="checkbox"

                onChange={(e)=> props.handleClick(e,
                        props.data.id)}

            />

            <label>{props.data.name}</label>

        </div>

    );

}



function
    MovieView(props) {

    return (

        <div className="movieView">

            {props.movie}

        </div>

    );

}
