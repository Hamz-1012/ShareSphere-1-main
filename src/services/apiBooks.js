import supabase from './supabase';

export async function getBooks ()
{

    const { data, error } = await supabase
        .from( 'books' )
        .select( '*' );


    if ( error )
    {
        console.error( error );
        throw new Error( 'Book could not be created' );
    }
    return data;
}

export async function createBook ( newBook )
{
    //https://yfwuozmpqynafptsskcq.supabase.co/storage/v1/object/public/resources/MachineLearning.pdf?t=2023-10-30T19%3A06%3A05.994Z

    const bookName = `${ Math.random() }-${ newBook.book.name }`.replaceAll( "/", "" );
    const bookUrl = `https://yfwuozmpqynafptsskcq.supabase.co/storage/v1/object/public/resources/${ bookName }?t=2023-10-30T19%3A06%3A05.994Z`;

    const { data, error } = await supabase
        .from( 'books' )
        .insert( [ { ...newBook, book: bookUrl } ] );

    if ( error )
    {
        console.error( error );
        throw new Error( 'Book could not be created' );
    }

    const { error: storageError } = await supabase.storage
        .from( 'resources' )
        .upload( bookName, newBook.book );

    if ( storageError )
    {
        await supabase
            .from( 'books' )
            .delete()
            .eq( "id", data.id );
        console.error( storageError );
        throw new Error( "Book could not be uploaded" );
    }

    return data;
}