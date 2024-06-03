function customError({
    message = '',      
    code = '',         
    stackTrace = []     
}) {
    const error = new Error(message);

    error.code = code;
    error.stackTrace = stackTrace;

    throw error;
}

export { customError };
