export const validate = (schema: any) => (req: any, res: any, next: any) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.errors
        })

    }
}