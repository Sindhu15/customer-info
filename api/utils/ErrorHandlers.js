module.exports = async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      console.log(err, "err");
      ctx.status = err.status || 500;
      ctx.body = {
        status: ctx.status,
        message: err.message
      };
      ctx.app.emit("error", err, ctx);
    }
};
