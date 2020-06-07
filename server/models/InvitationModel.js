const mongoose = require("mongoose");

const InvitationSchema = new mongoose.Schema(
  {
    invitedBy: {
      ref: "user",
      required: true,
      type: mongoose.Types.ObjectId,
    },
    userId: {
      ref: "user",
      type: mongoose.Types.ObjectId,
    },
    roomId: {
      ref: "room",
      required: true,
      type: mongoose.Types.ObjectId,
    },
    token: {
      type: String,
      required: true,
    },
    isPublic: { type: Boolean, default: false },
  },
  { timestamps: true }
);

InvitationSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.token;
  },
});

const Invitation = mongoose.model(
  "invitation",
  InvitationSchema,
  "invitations"
);

module.exports = { Invitation };
