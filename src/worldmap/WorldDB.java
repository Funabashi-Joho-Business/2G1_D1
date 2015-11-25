package worldmap;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.arnx.jsonic.JSON;

//
class ReturnData {
	public String data;
}

class SendData2 {
	public int id;
}

/**
 * Servlet implementation class WorldmapIpoDB
 */
@WebServlet("/WorldDB")
public class WorldDB extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private worldmap.Oracle mOracle;
	private final String DB_ID = "x14g006";
	private final String DB_PASS = "a";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public WorldDB() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void init() throws ServletException {
		// TODO 自動生成されたメソッド・スタブ
		super.init();

		try {
			mOracle = new Oracle();
			mOracle.connect("ux4", DB_ID, DB_PASS);

			// テーブルが無ければ作成
			if (!mOracle.isTable("db_worldmap")) {
				mOracle.execute("create table db_worldmap(id number,data varchar2(500))");
			}
		} catch (Exception e) {
			System.err.println("認証に失敗しました");
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		action(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		action(request, response);
	}

	private void action(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		// 出力ストリームの作成
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter out = response.getWriter();

		// データの受け取り処理
		SendData2 sendData = JSON.decode(request.getInputStream(),
				SendData2.class);

		try {

			ResultSet res = mOracle
					.query("select * from db_worldmap where id = "
							+ sendData.id);

			res.next();

			ReturnData reData = new ReturnData();
			reData.data = res.getString(2);

			// JSON形式に変換
			String json = JSON.encode(reData);
			// 出力
			out.println(json);

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
